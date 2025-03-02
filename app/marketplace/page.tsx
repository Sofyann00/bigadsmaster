import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Professional SEO Services</h1>
        <p className="mt-2 text-muted-foreground">
          Boost your online visibility and drive organic traffic with our comprehensive SEO solutions. From technical audits to content strategy, 
          we offer expert services to improve your search engine rankings and digital presence.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *All prices are in IDR. Custom packages available for specific business needs. Contact our team for detailed consultations.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}