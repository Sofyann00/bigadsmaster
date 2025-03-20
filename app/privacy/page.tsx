import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT SIGMA TEKNOLOGI INTEGRA',
  description: 'Privacy Policy for bigAdsMaster SEO services and client data protection',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                bigAdsMaster collects personal information including but not limited to: name, email address, phone number, business address, website URLs, analytics access, search console data, business goals, industry information, and payment information when you engage our SEO services or create an account on our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use your information to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Deliver our SEO and digital marketing services</li>
                <li>Provide progress updates and performance reports</li>
                <li>Notify you about service improvements and new offerings</li>
                <li>Customize our SEO strategies based on your business needs</li>
                <li>Maintain accurate records of our service delivery</li>
                <li>Send industry insights and newsletters (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal and business data against unauthorized access, alteration, disclosure, or destruction. This includes secure access to analytics platforms and website backends when required for SEO implementation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain your personal and business information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. SEO performance data may be retained for benchmarking and historical analysis purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground">
                Under Indonesian data protection laws, you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our website, remember your preferences, maintain your login status, analyze site traffic, and provide personalized content. We may also use tracking tools to monitor the performance of SEO strategies we implement for your business.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mt-2">
                  <p>PT SIGMA TEKNOLOGI INTEGRA</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: support@bigAdsMaster.com</p>
                  <p>Phone: (021)-78231455</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 