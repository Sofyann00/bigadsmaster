import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - bigAdsMaster',
  description: 'Terms of Service and conditions for using bigAdsMaster SEO services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the services provided by PT SIGMA TEKNOLOGI INTEGRA (hereinafter referred to as &quot;bigAdsMaster&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Services Offered
              </h2>
              <p className="text-muted-foreground">
                bigAdsMaster provides professional SEO and digital marketing services including but not limited to SEO audits, on-page optimization, content strategy, link building, local SEO, e-commerce SEO, technical SEO, and SEO monitoring. All service descriptions, including prices, deliverables, and timelines, are subject to change without prior notice. We guarantee the quality and professionalism of all services provided through our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Service Delivery and Satisfaction
              </h2>
              <p className="text-muted-foreground">
                All services are delivered according to the agreed scope of work. Clients must review deliverables within 7 days of receipt and report any concerns. Revisions are provided based on the original scope of work. We do not guarantee specific rankings or traffic increases as search engine algorithms are beyond our control, but we commit to implementing industry best practices to improve your digital presence.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground">
                We collect and process personal data in accordance with Indonesian data protection laws. This includes business information, website access, analytics data, and payment details. For more information, please refer to our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                While we strive for excellence in our SEO services, bigAdsMaster shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, including but not limited to changes in search engine algorithms, competitor activities, or market conditions that may affect SEO performance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about these Terms of Service, please contact us at:</p>
                <div className="mt-2">
                  <p>PT SIGMA TEKNOLOGI INTEGRA</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: admin@bigadsmaster.com</p>
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