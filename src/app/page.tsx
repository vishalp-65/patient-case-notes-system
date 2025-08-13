import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NHS Patient Case Notes System
          </h1>
          <p className="text-xl text-gray-600">
            Electronic health record system for NHS doctors to manage patient
            case notes
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Manual Case Notes</CardTitle>
              <CardDescription>
                Create and manage patient case notes with manual text entry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Create New Note</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scanned Notes</CardTitle>
              <CardDescription>
                Upload and transcribe handwritten or typed case notes using AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Upload Document
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patient Search</CardTitle>
              <CardDescription>
                Search and view patient case notes by NHS number
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Search Patients
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                View recent notes and system notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full">
                View Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center mt-12 text-gray-500">
          <p>
            NHS Patient Case Notes System - Secure, GDPR Compliant, Scalable
          </p>
        </footer>
      </div>
    </div>
  );
}
