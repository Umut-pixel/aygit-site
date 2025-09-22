import React, { useState, ChangeEvent, FormEvent } from 'react';

// Mock UI components for standalone usage
interface DialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => onOpenChange?.(false)}>
      <div className="bg-white rounded-lg max-w-md w-full mx-4" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
}

const DialogContent = ({ className, children }: DialogContentProps) => (
  <div className={`p-6 ${className || ''}`}>{children}</div>
);

interface DialogHeaderProps {
  children: React.ReactNode;
}

const DialogHeader = ({ children }: DialogHeaderProps) => (
  <div className="mb-4">{children}</div>
);

interface DialogTitleProps {
  className?: string;
  children: React.ReactNode;
}

const DialogTitle = ({ className, children }: DialogTitleProps) => (
  <h2 className={`text-xl font-semibold ${className || ''}`}>{children}</h2>
);

interface DialogDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const DialogDescription = ({ className, children }: DialogDescriptionProps) => (
  <p className={`text-sm text-gray-600 ${className || ''}`}>{children}</p>
);

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ type, variant, onClick, className, disabled, children }: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = variant === 'outline'
    ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500"
    : "text-white focus:ring-blue-500";

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
    >
      {children}
    </button>
  );
};

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ id, type, placeholder, value, onChange, className }: InputProps) => (
  <input
    id={id}
    type={type || 'text'}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className || ''}`}
  />
);

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor: htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
);

interface TextareaProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const Textarea = ({ id, placeholder, value, onChange, className }: TextareaProps) => (
  <textarea
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${className || ''}`}
  />
);

interface PhoneProps {
  className?: string;
}

// Mock Lucide icons
const Phone = ({ className }: PhoneProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

interface AlertCircleProps {
  className?: string;
}

const AlertCircle = ({ className }: AlertCircleProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

// BULLETPROOF STATIC LOGGING - NO ENVIRONMENT ACCESS EVER
const contactLog = (message: string, ...args: unknown[]) => {
  try {
    if (typeof window !== 'undefined' &&
      window.location &&
      window.location.hostname === 'localhost') {
      if (console && typeof console.log === 'function') {
        console.log(`[Aygıt Contact] ${message}`, ...args);
      }
    }
  } catch {
    // Bulletproof silence
  }
};

const contactError = (message: string, ...args: unknown[]) => {
  try {
    if (typeof window !== 'undefined' &&
      window.location &&
      window.location.hostname === 'localhost') {
      if (console && typeof console.error === 'function') {
        console.error(`[Aygıt Contact Error] ${message}`, ...args);
      }
    }
  } catch {
    // Bulletproof silence
  }
};

interface ContactCallbackFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  general?: string;
}

export function ContactCallbackForm({ isOpen, onClose }: ContactCallbackFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateContactForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ad-Soyad zorunludur";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası zorunludur";
    } else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Geçerli bir telefon numarası giriniz";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail adresi zorunludur";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-mail adresi giriniz";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj zorunludur";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactInputChange = (field: keyof ContactFormData, value: string) => {
    try {
      setFormData(prev => ({ ...prev, [field]: value }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }

      // Clear general error too
      if (errors.general) {
        setErrors(prev => ({ ...prev, general: undefined }));
      }
    } catch (error) {
      contactError("Input change error:", error);
    }
  };

  const handleContactSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      if (!validateContactForm()) {
        return;
      }

      setIsSubmitting(true);
      setErrors({});

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        contactLog("Contact form submitted:", formData);
        setIsSubmitted(true);

        // Reset form after successful submission
        setTimeout(() => {
          try {
            setFormData({ name: "", phone: "", email: "", message: "" });
            setIsSubmitted(false);
            setErrors({});
            onClose();
          } catch (error) {
            contactError("Form reset error:", error);
          }
        }, 2000);

      } catch (error) {
        contactError("Form submission error:", error);
        setErrors({ general: "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz." });
      } finally {
        setIsSubmitting(false);
      }
    } catch (error) {
      contactError("Submit wrapper error:", error);
      setIsSubmitting(false);
    }
  };

  const handleContactClose = () => {
    try {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    } catch (error) {
      contactError("Form close error:", error);
      try {
        onClose();
      } catch {
        // Bulletproof silence
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleContactClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
            </div>
            Sizi Arayalım
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Bilgilerinizi bırakın, uzmanlarımız en kısa sürede sizinle iletişime geçsin.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl text-green-600">✓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Form Başarıyla Gönderildi!</h3>
            <p className="text-gray-600 text-center">
              Talebinizi aldık. Uzmanlarımız en kısa sürede sizinle iletişime geçecek.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            {errors.general && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <div className="flex items-center space-x-2 text-red-700">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{errors.general}</span>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="contact-name">Adınız Soyadınız *</Label>
              <Input
                id="contact-name"
                type="text"
                placeholder="Ad ve soyadınızı giriniz"
                value={formData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleContactInputChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Telefon Numaranız *</Label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="0555 000 00 00"
                value={formData.phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleContactInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">E-mail Adresiniz *</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="ornek@email.com"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleContactInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Mesajınız *</Label>
              <Textarea
                id="contact-message"
                placeholder="Hangi konuda destek almak istiyorsunuz? Lütfen detaylı bilgi veriniz..."
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleContactInputChange("message", e.target.value)}
                className={`min-h-[100px] ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleContactClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                İptal
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Gönderiliyor...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Formu Gönder</span>
                  </div>
                )}
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Form göndererek, kişisel verilerinizin işlenmesine onay vermiş olursunuz.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Bulletproof clean hook for using contact callback form
export function useContactCallbackForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    try {
      setIsOpen(true);
    } catch (error) {
      contactError("Open form error:", error);
    }
  };

  const closeForm = () => {
    try {
      setIsOpen(false);
    } catch (error) {
      contactError("Close form error:", error);
    }
  };

  return {
    isOpen,
    openForm,
    closeForm,
    CallbackFormComponent: (props: Omit<ContactCallbackFormProps, 'isOpen' | 'onClose'>) => (
      <ContactCallbackForm {...props} isOpen={isOpen} onClose={closeForm} />
    )
  };
}