import { AlertTriangle, Inbox01 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { FeaturedIcon } from "@/components/ui/featured-icon"

function FeaturedIconInContext() {
  return (
    <>
      <div className="flex max-w-sm flex-col gap-3 rounded-xl border p-4">
        <div className="flex items-center gap-3">
          <FeaturedIcon
            theme="light"
            color="error"
            size="md"
            icon={<AlertTriangle aria-hidden />}
            title="Payment failed"
          />
          <div>
            <p className="text-sm font-medium">Payment failed</p>
            <p className="text-sm text-muted-foreground">
              Your card was declined. Update your billing details to keep your
              subscription active.
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-w-xs flex-col items-center gap-4 rounded-xl border p-6 text-center">
        <FeaturedIcon
          theme="modern"
          color="brand"
          size="lg"
          icon={<Inbox01 aria-hidden />}
          title="No messages yet"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">No messages yet</p>
          <p className="text-sm text-muted-foreground">
            Messages from your team will show up here.
          </p>
        </div>
        <Button size="sm" variant="outline">
          Invite teammates
        </Button>
      </div>
    </>
  )
}

export default FeaturedIconInContext
