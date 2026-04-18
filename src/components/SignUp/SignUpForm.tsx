import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignUpForm({
    className,
    login,
    setLogin,
    ...props
}: React.ComponentProps<"div"> & { login: boolean; setLogin: (login: boolean) => void }) {
    return (
        <div
            className={cn("flex justify-center items-center min-h-screen", className)}
            {...props}
        >
            <Card className="w-full max-w-md">
                <CardContent className="p-6 md:p-8">
                    <form>
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Welcome back</h1>
                                <p className="text-muted-foreground text-sm">
                                    Login to your account
                                </p>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>

                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto text-sm hover:underline"
                                    >
                                        Forgot?
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </Field>

                            <Field>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </Field>

                            <FieldSeparator>
                                Or continue with
                            </FieldSeparator>

                            <Field className="grid grid-cols-3 gap-4">
                                <Button variant="outline" type="button">Apple</Button>
                                <Button variant="outline" type="button">Google</Button>
                                <Button variant="outline" type="button">Meta</Button>
                            </Field>

                            <FieldDescription className="text-center">
                                Don&apos;t have an account?{" "}
                                <span className="cursor-pointer text-primary" onClick={() => setLogin(true)}>Sign up</span>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>

            <FieldDescription className="absolute bottom-4 text-center text-xs">
                By continuing, you agree to our Terms & Privacy Policy
            </FieldDescription>
        </div>
    )
}