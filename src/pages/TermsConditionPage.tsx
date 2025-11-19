import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function TermsConditionPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: November 20, 2025</p>
          <Separator />
        </div>

        {/* Introduction */}
        <Card className="p-6">
          <p className="text-lg leading-relaxed">
            Welcome to LofiConnect! These Terms and Conditions ("Terms") govern your access to and
            use of our platform. By accessing or using LofiConnect, you agree to be bound by these
            Terms. If you do not agree with any part of these Terms, please do not use our platform.
          </p>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By creating an account, accessing, or using LofiConnect, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and our Privacy Policy. These
              Terms apply to all visitors, users, and others who access or use the platform.
            </p>
          </section>

          {/* Eligibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Eligibility</h2>
            <div className="text-muted-foreground space-y-3">
              <p className="leading-relaxed">To use LofiConnect, you must:</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Be at least 13 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be prohibited from using the platform under applicable law</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                If you are under 18, you must have your parent or guardian's permission to use the
                platform.
              </p>
            </div>
          </section>

          {/* User Accounts */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. User Accounts</h2>
            <div className="text-muted-foreground space-y-3">
              <h3 className="text-foreground text-lg font-medium">Account Creation</h3>
              <p className="leading-relaxed">When creating an account, you agree to:</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as needed</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <h3 className="text-foreground mt-4 text-lg font-medium">Account Termination</h3>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violation
                of these Terms, without prior notice or liability.
              </p>
            </div>
          </section>

          {/* User Conduct */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. User Conduct</h2>
            <div className="text-muted-foreground space-y-3">
              <p className="leading-relaxed">You agree NOT to:</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Post or transmit harmful, offensive, or inappropriate content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the platform or servers</li>
                <li>Attempt to gain unauthorized access to any part of the platform</li>
                <li>Use automated systems (bots, scrapers) without permission</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Engage in spamming or unsolicited advertising</li>
              </ul>
            </div>
          </section>

          {/* Content and Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Content and Intellectual Property</h2>
            <div className="text-muted-foreground space-y-3">
              <h3 className="text-foreground text-lg font-medium">Your Content</h3>
              <p className="leading-relaxed">
                You retain ownership of content you post on LofiConnect. However, by posting
                content, you grant us a worldwide, non-exclusive, royalty-free license to use,
                reproduce, modify, and display your content for operating and improving the
                platform.
              </p>
              <h3 className="text-foreground mt-4 text-lg font-medium">Our Content</h3>
              <p className="leading-relaxed">
                All content on LofiConnect, including text, graphics, logos, and software, is owned
                by us or our licensors and is protected by copyright, trademark, and other
                intellectual property laws. You may not use our content without explicit permission.
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information is
              governed by our Privacy Policy. By using LofiConnect, you consent to our collection
              and use of information as described in the Privacy Policy.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Third-Party Services and Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform may contain links to third-party websites or services. We are not
              responsible for the content, privacy policies, or practices of any third-party sites.
              Your use of third-party services is at your own risk and subject to their terms and
              conditions.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Disclaimers and Warranties</h2>
            <div className="text-muted-foreground space-y-3">
              <p className="leading-relaxed">
                LofiConnect is provided on an "AS IS" and "AS AVAILABLE" basis. We make no
                warranties or representations about the accuracy, reliability, or availability of
                the platform.
              </p>
              <p className="leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
            <div className="text-muted-foreground space-y-3">
              <p className="leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOFICONNECT AND ITS AFFILIATES SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF
                THE PLATFORM.
              </p>
              <p className="leading-relaxed">
                Our total liability for any claims arising from your use of the platform shall not
                exceed the amount you paid us in the past 12 months, or $100, whichever is greater.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless LofiConnect, its officers,
              directors, employees, and agents from any claims, liabilities, damages, losses, and
              expenses arising from your use of the platform, violation of these Terms, or
              infringement of any third-party rights.
            </p>
          </section>

          {/* Modifications */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material
              changes by posting the updated Terms on this page and updating the "Last updated"
              date. Your continued use of the platform after changes constitutes acceptance of the
              new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. Governing Law and Dispute Resolution</h2>
            <div className="text-muted-foreground space-y-3">
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of [Your
                Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p className="leading-relaxed">
                Any disputes arising from these Terms or your use of the platform shall be resolved
                through binding arbitration, except where prohibited by law. You waive any right to
                participate in a class action lawsuit or class-wide arbitration.
              </p>
            </div>
          </section>

          {/* Severability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">13. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining
              provisions shall continue in full force and effect. The invalid provision shall be
              modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">14. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between
              you and LofiConnect regarding your use of the platform and supersede all prior
              agreements and understandings.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <Card className="bg-muted/50 p-4">
              <div className="space-y-1">
                <p className="font-medium">LofiConnect Legal Team</p>
                <p className="text-muted-foreground">Email: legal@loficonnect.com</p>
                <p className="text-muted-foreground">Support: support@loficonnect.com</p>
              </div>
            </Card>
          </section>
        </div>

        {/* Footer Note */}
        <Card className="bg-muted/30 p-6">
          <p className="text-muted-foreground text-center text-sm">
            By using LofiConnect, you acknowledge that you have read, understood, and agree to be
            bound by these Terms and Conditions.
          </p>
        </Card>
      </div>
    </div>
  );
}
