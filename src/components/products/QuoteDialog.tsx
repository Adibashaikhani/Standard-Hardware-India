
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { submitToGoogleSheets } from "@/lib/google-sheets";
import { Send, Loader2 } from "lucide-react";

interface QuoteDialogProps {
  productName: string;
  trigger?: React.ReactNode;
}

export default function QuoteDialog({ productName, trigger }: QuoteDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: 'quote' as const,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      product: productName,
      requirement: formData.get('requirement') as string,
    };

    const result = await submitToGoogleSheets(data);

    setIsSubmitting(false);
    if (result.success) {
      toast({
        title: "Quote Request Sent",
        description: "We've received your request and will get back to you shortly.",
      });
      setIsOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="bg-gold text-navy-dark hover:bg-gold-light border-none font-bold">
            Request a Quote
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white border-navy/10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-navy">Request a Quote</DialogTitle>
          <DialogDescription className="font-body text-slate-500">
            Tell us your requirements for <span className="text-gold font-bold">{productName}</span>.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-navy/70">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy/70">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john@company.com" required />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-navy/70">Phone Number</Label>
              <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-navy/70">Company Name</Label>
              <Input id="company" name="company" placeholder="Acme Corp" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirement" className="text-navy/70">Specifications / Requirement</Label>
            <Textarea 
              id="requirement" 
              name="requirement" 
              placeholder="Please specify size, grade, quantity, or any custom requirements..." 
              className="min-h-[120px] resize-none"
              required 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-navy hover:bg-navy-light text-white font-bold h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Quote Request
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
