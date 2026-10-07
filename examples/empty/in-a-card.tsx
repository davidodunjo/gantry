import { Plus } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function EmptyInACard() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Plus aria-hidden="true" />
            </EmptyMedia>
            <EmptyTitle>Start your first project</EmptyTitle>
            <EmptyDescription>
              Bring your ideas together in one place. Create a project to get
              started.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              nativeButton={false}
              render={<a href="#dialog" aria-label="Create project" />}
            >
              Create project
            </Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}

export default EmptyInACard
