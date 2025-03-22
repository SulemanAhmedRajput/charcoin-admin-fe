"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MoveLeft, RotateCcw } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isResetLoading, setIsResetLoading] = useState<boolean>(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted px-4 text-center">
      <div className="space-y-8 max-w-md">
        <div className="relative">
          <div className="absolute -top-1 left-[calc(50%-50px)] w-24 h-24 bg-destructive/20 rounded-full blur-xl animate-pulse" />
          <div className="relative z-10 flex items-center justify-center w-24 h-24 mx-auto rounded-full ">
            <AlertTriangle className="h-12 w-12 text-destructive " />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Oops!
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Something went wrong
          </h2>
          <p className="text-muted-foreground">
            We encountered an unexpected error while processing your request.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={async () => {
              setIsResetLoading(true);
              await reset();
              setIsResetLoading(false);
            }}
            variant="default"
            size="lg"
            className="gap-2"
          >
            <RotateCcw
              className={cn("h-4 w-4", isResetLoading && "animate-spin")}
            />
            Try Again
          </Button>

          <Button
            asChild
            variant="newly_secondary"
            size="lg"
            className="gap-2 border-primary border-2 text-primary hover:bg-primary hover:text-background"
          >
            <Link href="/">
              <MoveLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-destructive/60"
              style={{
                animation: `pulse ${
                  2 + Math.random() * 3
                }s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
