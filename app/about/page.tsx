import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - bigadsmaster',
  description: 'Learn about bigadsmaster, your trusted SEO and digital marketing partner in Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            About bigadsmaster
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Your Trusted SEO and Digital Marketing Partner in Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a commitment to digital excellence, bigadsmaster has emerged as a leading SEO and digital marketing agency in Indonesia. Our journey began with a clear vision: to help businesses improve their online visibility, drive organic traffic, and achieve higher search engine rankings through innovative SEO strategies and expert services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>SEO Specialists with Proven Results</li>
                <li>Customized SEO Strategies</li>
                <li>Data-Driven Approach</li>
                <li>Comprehensive Digital Marketing Solutions</li>
                <li>Transparent Reporting and Communication</li>
                <li>Local SEO Expertise for Indonesian Market</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Commitment
              </h2>
              <p className="text-muted-foreground">
                At bigadsmaster, we are committed to delivering exceptional SEO solutions that drive business growth. Our team of skilled SEO specialists and digital marketers works tirelessly to understand your unique challenges and create tailored strategies that exceed expectations. We pride ourselves on building long-term partnerships and ensuring client success through innovative techniques and measurable results.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Services
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Comprehensive SEO Audits & Strategy</li>
                <li>On-Page SEO Optimization</li>
                <li>Content Strategy & Creation</li>
                <li>Link Building Campaigns</li>
                <li>Local SEO Solutions</li>
                <li>E-commerce SEO Packages</li>
                <li>Technical SEO Audits</li>
                <li>SEO Monitoring & Reporting</li>
                <li>Competitor Analysis</li>
                <li>Mobile SEO Optimization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Office Location
              </h2>
              <div className="text-muted-foreground">
                <p>Visit our office:</p>
                <div className="mt-2">
                  <p>bigadsmaster</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 10130</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Business Hours
              </h2>
              <div className="text-muted-foreground grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>Get in touch with us:</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: (021)-78231455</p>
                  <p>Email: admin@bigadsmaster.com</p>
                  <p>WhatsApp: +62 812-7766-8953</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 