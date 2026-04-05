import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils";

const ButtonSpinner = ({type, text, loading, onClick, className, ...props}: {type: string; text: string; loading: boolean; onClick: () => void; className?: string}) => {
  return (
    <div>
     <Button variant="outline" type={type} disabled={loading} onClick={onClick} className={cn("", className)} {...props}>
        {loading && <Spinner data-icon="inline-start" />}
        {text}
      </Button>
    </div>
  )
}

export default ButtonSpinner