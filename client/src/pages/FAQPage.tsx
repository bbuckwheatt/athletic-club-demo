import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Membership",
      questions: [
        {
          question: "How do I join the Athletic Club?",
          answer: "Joining is easy! You can sign up at the front desk, or you can start the process online. You will need to complete a membership application and pay the initiation fee and your first month's dues."
        },
        {
          question: "Can I freeze my membership?",
          answer: "Yes, we understand that life can be unpredictable. You can freeze your membership for up to three months in a calendar year for a nominal fee. Please contact our member services team for more information."
        }
      ]
    },
    {
      category: "Guests",
      questions: [
        {
          question: "Can I bring a guest to the club?",
          answer: "Absolutely! We love it when our members share their experience with friends and family. Each member is allowed to bring one guest per visit for a small fee. All guests must sign a liability waiver upon entry."
        }
      ]
    },
    {
      category: "Classes and Programs",
      questions: [
        {
          question: "How do I sign up for classes?",
          answer: "You can reserve your spot in our group fitness classes up to 48 hours in advance through our mobile app or online member portal. For specialty classes and programs, you can register at the front desk."
        },
        {
          question: "What is your class cancellation policy?",
          answer: "We understand that plans can change. If you need to cancel your reservation for a class, please do so at least two hours in advance to avoid a cancellation fee. This allows us to open up the spot to another member."
        }
      ]
    },
    {
      category: "General Information",
      questions: [
        {
          question: "What are your hours of operation?",
          answer: "We are open Monday through Friday from 5:00 AM to 10:00 PM, and on Saturday and Sunday from 7:00 AM to 8:00 PM."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, we have a large, well-lit parking lot with ample parking for our members."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 pb-2">
        <Link href="/">
          <Button variant="ghost" data-testid="button-back-home">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-faq-title">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg opacity-90" data-testid="text-faq-subtitle">
              Find answers to common questions about membership, facilities, and programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card data-testid="card-faq-all">
              <CardHeader>
                <CardTitle className="text-2xl">Common Questions</CardTitle>
                <CardDescription>
                  Everything you need to know about membership, facilities, and programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqCategories.flatMap((category, categoryIndex) => 
                    category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={`${categoryIndex}-${faqIndex}`} 
                        value={`item-${categoryIndex}-${faqIndex}`}
                        data-testid={`accordion-item-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  )}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
              <CardDescription className="text-base">
                Our member services team is here to help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                If you have a question that is not answered here, please don't hesitate to contact 
                our member services team. We're happy to assist you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">(555) 123-4567</p>
                </div>
                <div className="hidden sm:block w-px bg-border"></div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">info@needhamac.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
