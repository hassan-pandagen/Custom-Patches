"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { quoteSchema, type QuoteFormData } from "../lib/schema";
import { useCloudinary } from "../hooks/useCloudinary";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { cn } from "../lib/utils";

export function QuoteForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Filename of an attachment that the customer chose but that failed to
  // upload. We still send the enquiry (losing the lead is worse than losing
  // the file) but both the customer and the notification email must be told,
  // rather than silently reporting success with no artwork.
  const [failedAttachment, setFailedAttachment] = useState<string | null>(null);

  // We will configure this in the next step
  const { upload, uploading: isUploadingFile } = useCloudinary();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const file = watch("file");

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      setValue("file", acceptedFiles[0], { shouldValidate: true });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".svg", ".webp"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setFailedAttachment(null);

    try {
      let attachmentUrl = "";
      let uploadFailedFor: string | null = null;

      // 1. Upload file to Cloudinary (If a file exists)
      if (data.file instanceof File) {
        const uploadedUrl = await upload(data.file);
        if (uploadedUrl) {
          attachmentUrl = uploadedUrl;
        } else {
          uploadFailedFor = data.file.name;
        }
      }

      // 2. Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // ✅ Using environment variable (industry standard)
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,

          subject: `New Quote Request from ${data.name}`,
          from_name: "My Custom Patches Website",

          // Form Data
           name: data.name,
           email: data.email,
           phone: data.phone,
           patch_type: data.category,
           details: `Patch Type: ${data.category}, Size: ${data.size}, Qty: ${data.quantity}, Backing: ${data.backing || "Not specified"}`,

          // This allows you to click the link in the email to download the image
          attachment_link:
            attachmentUrl ||
            (uploadFailedFor
              ? `UPLOAD FAILED - customer selected "${uploadFailedFor}". Ask them to email it.`
              : "No file uploaded"),

          // Technical Message Body
          message: `
            New Quote Request:
            ------------------
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}

            Specs:
            ------
            Patch Type: ${data.category}
            Size: ${data.size}
            Quantity: ${data.quantity}
            Backing: ${data.backing || "Not specified"}

            Special Instructions:
            ---------------------
            ${data.instructions || "None"}

            Design File:
            ------------
            ${
              attachmentUrl
                ? attachmentUrl
                : uploadFailedFor
                  ? `*** ACTION NEEDED *** The customer attached "${uploadFailedFor}" but the upload failed, so there is no file. Reply and ask them to email the artwork.`
                  : "No file attached"
            }
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFailedAttachment(uploadFailedFor);
        setIsSuccess(true);
        reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl bg-green-50 p-8 text-center animate-in fade-in zoom-in-95">
        <CheckCircle className="h-12 w-12 text-green-600" />
        <h3 className="text-2xl font-bold text-green-800">Quote Received!</h3>
        <p className="text-green-700">
          We have received your details and will get back to you shortly with a custom quote.
        </p>
        {failedAttachment && (
          <div className="flex items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-left">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <p className="text-sm text-amber-800">
              We could not attach <strong>{failedAttachment}</strong> to your request. Your quote
              was sent without it &mdash; please email the file to{" "}
              <a href="mailto:admin@mycustompatches.com" className="font-medium underline">
                admin@mycustompatches.com
              </a>{" "}
              so we can price it accurately.
            </p>
          </div>
        )}
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Input placeholder="Your Name" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Input placeholder="Email Address" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Input placeholder="Phone Number" type="tel" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-category" className="sr-only">Patch Type</label>
          <select
            id="quote-category"
            {...register("category")}
            className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-brand-orange focus:outline-hidden focus:ring-2 focus:ring-brand-orange/20"
          >
            <option value="">Select Patch Type</option>
            <option value="Custom Embroidered Patches">Custom Embroidered Patches</option>
            <option value="Custom Chenille Patches">Custom Chenille Patches</option>
            <option value="Custom Woven Patches">Custom Woven Patches</option>
            <option value="Custom Printed Patches">Custom Printed Patches</option>
            <option value="Custom PVC Patches">Custom PVC Patches</option>
            <option value="Custom Leather Patches">Custom Leather Patches</option>
            <option value="Custom 3D Embroidery Transfer">Custom 3D Embroidery Transfer</option>
            <option value="Custom Sequin Patches">Custom Sequin Patches</option>
          </select>
          {errors.category && <p className="text-xs text-red-500">{errors.category.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex-1 space-y-2">
          <Input placeholder="Size (e.g. 3x3)" {...register("size")} />
          {errors.size && <p className="text-xs text-red-500">{errors.size.message}</p>}
        </div>
        <div className="flex-1 space-y-2">
          <Input placeholder="Quantity" type="number" {...register("quantity")} />
          {errors.quantity && <p className="text-xs text-red-500">{errors.quantity.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="quote-backing" className="sr-only">Backing Type</label>
          <select
            id="quote-backing"
            {...register("backing")}
            className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-brand-orange focus:outline-hidden focus:ring-2 focus:ring-brand-orange/20"
          >
            <option value="">Select Backing</option>
            <option value="Iron-on">Iron-on</option>
            <option value="Sew-on">Sew-on</option>
            <option value="Velcro">Velcro</option>
            <option value="Adhesive">Adhesive</option>
            <option value="Sticker">Sticker</option>
            <option value="Plain">Plain (No Backing)</option>
          </select>
          {errors.backing && <p className="text-xs text-red-500">{errors.backing.message}</p>}
        </div>
        <div className="space-y-2">
          <Input placeholder="Special Instructions (Optional)" {...register("instructions")} />
          {errors.instructions && <p className="text-xs text-red-500">{errors.instructions.message}</p>}
        </div>
      </div>

      {/* File Upload Area */}
      <div
        {...getRootProps()}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-900 p-3 transition-colors hover:bg-gray-800",
          isDragActive && "border-brand-orange bg-brand-orange/10",
          errors.file && "border-red-500"
        )}
      >
        <input {...getInputProps()} aria-label="Upload design file (SVG, PNG, JPG or PDF)" />
        <Upload className="mb-1 h-6 w-6 text-gray-500" />
        {file ? (
          <p className="text-sm font-medium text-white">{(file as File).name}</p>
        ) : (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-300">Click to upload or drag & drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or PDF (Max 10MB)</p>
          </div>
        )}
      </div>

      {submitError && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          {submitError}
        </div>
      )}

      <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-red text-white" disabled={isSubmitting || isUploadingFile}>
        {isSubmitting || isUploadingFile ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {isUploadingFile ? "Uploading File..." : "Sending..."}
          </>
        ) : (
          "Get Instant Quote"
        )}
      </Button>
    </form>
  );
}
