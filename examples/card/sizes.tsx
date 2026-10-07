import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CardSizes() {
  return (
    <>
      {(["default", "sm"] as const).map((size) => (
        <Card size={size} key={size} className="w-full max-w-xs">
          <CardHeader>
            <CardTitle>Team workspace</CardTitle>
            <CardDescription>
              Manage the people and projects in your workspace.
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="xs">
                Edit
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>12 members, 4 active projects</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              View workspace
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default CardSizes
