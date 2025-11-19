import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: November 20, 2025</p>
          <Separator />
        </div>

        {/* Introduction */}
        <Card className="p-6">
          <p className="text-lg leading-relaxed">
            At LofiConnect, we take your privacy seriously. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use our platform. Please
            read this privacy policy carefully.
          </p>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <div className="text-muted-foreground space-y-3">
              <div>
                <h3 className="text-foreground mb-2 text-lg font-medium">Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you
                  register on the platform, including:
                </p>
                <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
                  <li>Name and email address</li>
                  <li>Username and password</li>
                  <li>Profile information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-lg font-medium">
                  Automatically Collected Information
                </h3>
                <p className="leading-relaxed">
                  When you access our platform, we may automatically collect certain information,
                  including:
                </p>
                <ul className="mt-2 ml-4 list-inside list-disc space-y-1">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <div className="text-muted-foreground space-y-2">
              <p className="leading-relaxed">We use the information we collect to:</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Provide, operate, and maintain our platform</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you, including customer service</li>
                <li>Process your transactions</li>
                <li>Send you updates and marketing communications</li>
                <li>Monitor and analyze usage and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Sharing Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
            <div className="text-muted-foreground space-y-3">
              <p className="leading-relaxed">
                We may share your information in the following circumstances:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong className="text-foreground">Service Providers:</strong> With third-party
                  vendors who perform services on our behalf
                </li>
                <li>
                  <strong className="text-foreground">Legal Requirements:</strong> When required by
                  law or to protect our rights
                </li>
                <li>
                  <strong className="text-foreground">Business Transfers:</strong> In connection
                  with a merger, sale, or acquisition
                </li>
                <li>
                  <strong className="text-foreground">With Your Consent:</strong> When you
                  explicitly agree to share your information
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal information. However, no method of transmission over the internet or
              electronic storage is 100% secure. While we strive to protect your information, we
              cannot guarantee its absolute security.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our platform and
              hold certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, if you do not accept cookies, you may
              not be able to use some portions of our platform.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Your Privacy Rights</h2>
            <div className="text-muted-foreground space-y-2">
              <p className="leading-relaxed">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Restrict or object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform is not intended for children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please
              contact us at:
            </p>
            <Card className="bg-muted/50 p-4">
              <div className="space-y-1">
                <p className="font-medium">LofiConnect Support</p>
                <p className="text-muted-foreground">Email: privacy@loficonnect.com</p>
              </div>
            </Card>
          </section>
        </div>

        {/* Footer Note */}
        <Card className="bg-muted/30 p-6">
          <p className="text-muted-foreground text-center text-sm">
            By using LofiConnect, you acknowledge that you have read and understood this Privacy
            Policy and agree to its terms.
          </p>
        </Card>
      </div>
    </div>
  );
}
