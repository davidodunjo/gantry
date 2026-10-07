import { SearchLg } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchLg aria-hidden="true" />
        </EmptyMedia>
        <EmptyTitle>No projects found</EmptyTitle>
        <EmptyDescription>
          Your search did not match any projects. Try a different name.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button
          variant="outline"
          nativeButton={false}
          render={<a href="#components" aria-label="Back to components" />}
        >
          Back to components
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export default EmptyDemo
