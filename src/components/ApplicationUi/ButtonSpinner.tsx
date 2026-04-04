import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const ButtonSpinner = () => {
  return (
    <div>
     <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
    </div>
  )
}

export default ButtonSpinner