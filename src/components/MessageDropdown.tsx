import { Mail, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const messages = [
  {
    title: "New Course Available",
    description: "30 minutes ago",
  },
  {
    title: "Group Study Invitation",
    description: "1 hour ago",
  },
  {
    title: "Reminder: Assignment Due",
    description: "3 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function MessageDropdown({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
        <CardDescription>You have 3 new messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {message.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {message.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MessageDropdown;
