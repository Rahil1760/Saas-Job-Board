import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router-dom"

export default function AlertBox({ showAlert, setShowAlert, description, navigateTo, buttonText }: { showAlert: boolean, setShowAlert: (value: boolean) => void, description: string, navigateTo: string, buttonText: string }) {
    const navigation = useNavigate()
    return (
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => navigation(`${navigateTo}`)}>{buttonText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}