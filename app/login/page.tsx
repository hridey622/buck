import AuthForm from '../components/AuthForm'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Log In</h1>
      <div className="w-full max-w-md">
        <AuthForm mode="login" />
      </div>
    </div>
  )
}

