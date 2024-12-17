import CategoryCard from '../components/CategoryCard'

const categories = [
  { name: "B2B", description: "Business-to-business solutions and services" },
  { name: "Education", description: "Innovative learning platforms and educational technology" },
  { name: "Fintech", description: "Financial technology and digital banking solutions" },
  { name: "Consumer", description: "Products and services for everyday consumers" },
  { name: "Healthcare", description: "Medical technology and healthcare innovations" },
  { name: "Real Estate and Construction", description: "Property tech and construction innovations" },
  { name: "Industrials", description: "Manufacturing and industrial technology solutions" },
  { name: "Government", description: "Technology solutions for government and public services" },
  { name: "Unspecified", description: "Startups that don't fit into other categories" },
]

export default function StartupCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Startup Categories</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
        Explore the diverse range of startup categories available on Inventure. From cutting-edge tech to innovative services, find the perfect investment opportunity in your area of interest.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.name} name={category.name} description={category.description} />
        ))}
      </div>
    </div>
  )
}

