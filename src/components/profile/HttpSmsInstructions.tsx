import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const HttpSmsInstructions = () => {
  return (
    <Card className="mt-8 bg-white/80 backdrop-blur-lg">
      <CardHeader className="bg-gradient-to-r from-hotbot-pink to-hotbot-purple text-white rounded-t-lg">
        <CardTitle className="text-center">HttpSMS Setup Instructions</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-gray-700">
          HttpSMS is an open-source service that converts your Android phone into an SMS Gateway. Follow these steps to get started:
        </p>
        
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Visit the HttpSMS dashboard at <a href="https://httpsms.com/settings" target="_blank" rel="noopener noreferrer" className="text-hotbot-pink hover:underline">httpsms.com/settings</a></li>
          <li>Create an account and get your API key from the settings page</li>
          <li>Download and install the Android app:
            <Button 
              variant="outline"
              className="ml-2 text-hotbot-pink border-hotbot-pink hover:bg-hotbot-pink hover:text-white"
              onClick={() => window.open('https://github.com/NdoleStudio/httpsms/releases/latest/download/HttpSms.apk', '_blank')}
            >
              Download Android App <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </li>
          <li>Enter your API key in the app settings</li>
          <li>Return to this profile page and enter your API key in the settings above</li>
        </ol>

        <div className="mt-4 p-4 bg-pink-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Note: The API key should be included in the x-api-key header for all API requests. 
            Make sure to keep your API key secure and never share it publicly.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};