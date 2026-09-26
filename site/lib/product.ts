type Product = {
  category: string
  subcategory: string
  product: string
  imageURL: string
}

export function groupProducts(data: Product[]) {
  const grouped: Record<string, Record<string, Product[]>> = {}

  data.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = {}
    }

    if (!grouped[item.category][item.subcategory]) {
      grouped[item.category][item.subcategory] = []
    }

    grouped[item.category][item.subcategory].push(item)
  })

  return grouped
}