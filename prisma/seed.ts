import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sampleProducts = [
  {
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    category: "Electronics",
    images: ["/images/iphone-15-pro.jpg"],
    brand: "Apple",
    description: "Latest iPhone with titanium design and A17 Pro chip",
    stock: 50,
    price: 999.99,
    rating: 4.8,
    numReviews: 125,
    isFeatured: true,
    banner: "/images/iphone-banner.jpg"
  },
  {
    name: "MacBook Air M3",
    slug: "macbook-air-m3",
    category: "Electronics",
    images: ["/images/macbook-air-m3.jpg"],
    brand: "Apple",
    description: "Ultra-thin laptop with M3 chip and all-day battery",
    stock: 30,
    price: 1299.99,
    rating: 4.9,
    numReviews: 89,
    isFeatured: true,
    banner: "/images/macbook-banner.jpg"
  },
  {
    name: "Nike Air Max 270",
    slug: "nike-air-max-270",
    category: "Shoes",
    images: ["/images/nike-air-max-270.jpg"],
    brand: "Nike",
    description: "Comfortable running shoes with max air cushioning",
    stock: 75,
    price: 150.00,
    rating: 4.5,
    numReviews: 203,
    isFeatured: false
  },
  {
    name: "Adidas Ultraboost 22",
    slug: "adidas-ultraboost-22",
    category: "Shoes",
    images: ["/images/adidas-ultraboost-22.jpg"],
    brand: "Adidas",
    description: "Premium running shoes with boost technology",
    stock: 60,
    price: 180.00,
    rating: 4.6,
    numReviews: 167,
    isFeatured: false
  },
  {
    name: "Levi's 501 Original Jeans",
    slug: "levis-501-original-jeans",
    category: "Clothing",
    images: ["/images/levis-501.jpg"],
    brand: "Levi's",
    description: "Classic straight-fit jeans with authentic styling",
    stock: 100,
    price: 89.99,
    rating: 4.3,
    numReviews: 456,
    isFeatured: false
  },
  {
    name: "Samsung 65\" QLED TV",
    slug: "samsung-65-qled-tv",
    category: "Electronics",
    images: ["/images/samsung-qled-tv.jpg"],
    brand: "Samsung",
    description: "4K QLED Smart TV with HDR and gaming features",
    stock: 15,
    price: 1899.99,
    rating: 4.7,
    numReviews: 78,
    isFeatured: true,
    banner: "/images/tv-banner.jpg"
  },
  {
    name: "PlayStation 5",
    slug: "playstation-5",
    category: "Electronics",
    images: ["/images/ps5.jpg"],
    brand: "Sony",
    description: "Next-gen gaming console with 4K gaming and ray tracing",
    stock: 25,
    price: 499.99,
    rating: 4.9,
    numReviews: 312,
    isFeatured: true,
    banner: "/images/ps5-banner.jpg"
  },
  {
    name: "Nike Dri-FIT T-Shirt",
    slug: "nike-dri-fit-tshirt",
    category: "Clothing",
    images: ["/images/nike-dri-fit.jpg"],
    brand: "Nike",
    description: "Moisture-wicking athletic t-shirt for workouts",
    stock: 200,
    price: 24.99,
    rating: 4.2,
    numReviews: 89,
    isFeatured: false
  },
  {
    name: "AirPods Pro (2nd Gen)",
    slug: "airpods-pro-2nd-gen",
    category: "Electronics",
    images: ["/images/airpods-pro.jpg"],
    brand: "Apple",
    description: "Wireless earbuds with active noise cancellation",
    stock: 80,
    price: 249.99,
    rating: 4.6,
    numReviews: 234,
    isFeatured: false
  },
  {
    name: "Converse Chuck Taylor All Star",
    slug: "converse-chuck-taylor",
    category: "Shoes",
    images: ["/images/converse-chuck-taylor.jpg"],
    brand: "Converse",
    description: "Classic canvas sneakers with timeless design",
    stock: 120,
    price: 65.00,
    rating: 4.4,
    numReviews: 567,
    isFeatured: false
  }
]

const sampleUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "$2a$10$K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2", // password: "123456"
    role: "user"
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "$2a$10$K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2", // password: "123456"
    role: "user"
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "$2a$10$K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2K2", // password: "123456"
    role: "admin"
  }
]

async function main() {
  console.log('Starting seed...')

  // Clear existing data
  await prisma.review.deleteMany({})
  await prisma.orderItem.deleteMany({})
  await prisma.order.deleteMany({})
  await prisma.cart.deleteMany({})
  await prisma.product.deleteMany({})
  await prisma.session.deleteMany({})
  await prisma.account.deleteMany({})
  await prisma.user.deleteMany({})

  console.log('Cleared existing data...')

  // Create users
  console.log('Creating users...')
  for (const user of sampleUsers) {
    await prisma.user.create({
      data: user
    })
  }

  // Create products
  console.log('Creating products...')
  for (const product of sampleProducts) {
    await prisma.product.create({
      data: product
    })
  }

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })