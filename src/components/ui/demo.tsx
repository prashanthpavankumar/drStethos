import { TravelCard } from "@/components/ui/card-7";
import { Mountain } from "lucide-react";
import { Toaster, toast } from "sonner";

export default function TravelCardDemo() {
  const handleBooking = () => {
    toast.success("Booking initiated!", {
      description: "Redirecting to booking page...",
    });
  };

  return (
    <>
      <Toaster richColors />
      <div className="flex w-full items-center justify-center bg-transparent py-4 z-50">
        <TravelCard
          imageUrl="https://images.unsplash.com/photo-1551041777-ed277b8dd348?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Doctor Consulting"
          logo={<Mountain className="h-6 w-6 text-white/80" />}
          title="Premium Service"
          location="Exclusive Access"
          overview="A high complexity animating object right in your face. Secure, dynamic and extremely visually appealing card showing advanced integration."
          price={120}
          pricePeriod="Per Session"
          onBookNow={handleBooking}
          aria-label="Travel card for Manhattan Green Camp"
        />
      </div>
    </>
  );
}
