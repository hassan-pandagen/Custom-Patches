"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, CheckCircle } from "lucide-react";
import { useCloudinary } from "../hooks/useCloudinary";
import { WaveDivider } from "./ui/WaveDivider";

const inputClass =
  "w-full rounded-lg border-2 border-brand-blue bg-brand-mint px-4 py-3 font-mouse text-sm text-brand-blue placeholder:text-brand-blue/60 focus:outline-hidden focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30";

export function SpecialRates() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // See QuoteForm: never report success for an attachment that never uploaded.
  const [failedAttachment, setFailedAttachment] = useState<string | null>(null);

  const { upload } = useCloudinary();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      setSelectedFile(acceptedFiles[0]);
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    size: "",
    patchType: "",
    backing: "",
    heardAbout: "",
    instructions: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFailedAttachment(null);

    try {
      let attachmentUrl = "";
      let uploadFailedFor: string | null = null;

      if (selectedFile) {
        setIsUploadingFile(true);
        const uploadedUrl = await upload(selectedFile);
        if (uploadedUrl) {
          attachmentUrl = uploadedUrl;
        } else {
          uploadFailedFor = selectedFile.name;
        }
        setIsUploadingFile(false);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Free Quote Request from ${formData.name}`,
          from_name: "My Custom Patches Website",

          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          quantity: formData.quantity,
          size: formData.size,
          patch_type: formData.patchType,
          backing: formData.backing,
          heard_about: formData.heardAbout,
          instructions: formData.instructions,

          attachment_link:
            attachmentUrl ||
            (uploadFailedFor
              ? `UPLOAD FAILED - customer selected "${uploadFailedFor}". Ask them to email it.`
              : "No file attached"),

          message: `
            New Free Quote Request:
            ------------------
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}

            Specs:
            ------
            Size: ${formData.size}
            Quantity: ${formData.quantity}
            Patch Type: ${formData.patchType}
            Backing: ${formData.backing}
            How they heard about us: ${formData.heardAbout || "Not specified"}

            Instructions:
            ${formData.instructions || "None"}

            Design File:
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          quantity: "",
          size: "",
          patchType: "",
          backing: "",
          heardAbout: "",
          instructions: "",
        });
        setSelectedFile(null);
        if (!uploadFailedFor) {
          setTimeout(() => setIsSuccess(false), 5000);
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-brand-blue pb-20 lg:pb-28">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-mint p-6 sm:p-10 shadow-2xl">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-in fade-in zoom-in-95">
              <CheckCircle className="h-14 w-14 text-brand-blue" />
              <h3 className="font-display text-2xl text-brand-blue">Thank You!</h3>
              <p className="font-mouse text-sm text-brand-blue/80 max-w-sm">
                We&apos;ll contact you within 24 hours with a free quote and mockup for your order.
              </p>
              {failedAttachment && (
                <p className="max-w-sm rounded-lg border-2 border-brand-blue bg-white/70 p-3 font-mouse text-sm text-brand-blue">
                  We could not attach <strong>{failedAttachment}</strong>. Your request was sent
                  without it &mdash; please email the file to{" "}
                  <a href="mailto:admin@mycustompatches.com" className="font-bold underline">
                    admin@mycustompatches.com
                  </a>
                  .
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-3.5 w-3.5 rounded-full bg-brand-lime" />
                <h3 className="font-mouse text-sm sm:text-base uppercase tracking-wide text-brand-blue">
                  Get Your Free Quote &amp; 12-24h Mockup
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleInputChange} className={inputClass} placeholder="Name*" required />
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="Email*" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="Phone Number*" required />
                  <input name="quantity" type="number" min={5} value={formData.quantity} onChange={handleInputChange} className={inputClass} placeholder="Quantity (min 5)*" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input name="size" value={formData.size} onChange={handleInputChange} className={inputClass} placeholder="Size or Placement*" required />

                  <label htmlFor="sr-patchType" className="sr-only">Patch Type</label>
                  <select id="sr-patchType" name="patchType" value={formData.patchType} onChange={handleInputChange} className={inputClass} required>
                    <option value="">Patch Type</option>
                    <option value="Custom Embroidered Patches">Custom Embroidered Patches</option>
                    <option value="Custom Chenille Patches">Custom Chenille Patches</option>
                    <option value="Custom Woven Patches">Custom Woven Patches</option>
                    <option value="Custom Printed Patches">Custom Printed Patches</option>
                    <option value="Custom PVC Patches">Custom PVC Patches</option>
                    <option value="Custom Leather Patches">Custom Leather Patches</option>
                    <option value="Custom 3D Embroidery Transfer">Custom 3D Embroidery Transfer</option>
                    <option value="Custom Sequin Patches">Custom Sequin Patches</option>
                  </select>

                  <label htmlFor="sr-backing" className="sr-only">Backing Type</label>
                  <select id="sr-backing" name="backing" value={formData.backing} onChange={handleInputChange} className={inputClass}>
                    <option value="">Select Backing</option>
                    <option value="Iron-on">Iron-on</option>
                    <option value="Sew-on">Sew-on</option>
                    <option value="Velcro">Velcro</option>
                    <option value="Adhesive">Adhesive</option>
                    <option value="Sticker">Sticker</option>
                    <option value="Plain">Plain (No Backing)</option>
                  </select>
                </div>

                <input
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="How did you hear about us? (optional)"
                />

                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleInputChange}
                  className={`${inputClass} min-h-[90px] resize-none`}
                  placeholder='Instructions: Text "Panda Patches" white background...'
                />

                {/* Drag & Drop Area */}
                <div
                  {...getRootProps()}
                  className={`rounded-lg border-2 border-dashed p-6 text-center cursor-pointer transition-colors border-brand-blue ${
                    isDragActive ? "bg-brand-lime/50" : "hover:bg-brand-lime/30"
                  }`}
                >
                  <input {...getInputProps()} aria-label="Upload design file (SVG, PNG, JPG or PDF)" />
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-6 w-6 text-brand-blue" />
                    {selectedFile ? (
                      <p className="font-mouse text-sm text-brand-blue">{selectedFile.name}</p>
                    ) : (
                      <>
                        <p className="font-mouse text-sm text-brand-blue">Drop files here or</p>
                        <span className="rounded-full bg-white px-4 py-1.5 font-mouse text-xs text-brand-blue">
                          Select Files
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isUploadingFile}
                  className="w-full rounded-full bg-brand-lime py-4 font-mouse text-sm text-brand-blue hover:bg-white transition-colors disabled:opacity-60"
                >
                  {isUploadingFile ? "Uploading File..." : isSubmitting ? "Submitting..." : "Get My Free Quote"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <WaveDivider fill="white" />
      </div>
    </section>
  );
}
