import React from 'react'

const fakeUsers = [
 {
    "userId": "a1B2C3D4E5F6G7H8I9J0",
    "name": "Aarav Mehta",
    "email": "aarav.mehta@example.com",
    "password": "aarav@123",
    "cart": ["621110", "621145"],
    "wishlist": ["621145"],
    "orders": [],
    "notifications": [
      {
        "tittle": "Added to Cart",
        "message": "Men's Classic Sports Tee",
        "id": "621110",
        "images": "https://images.puma.com/image/upload/f_auto/global/621110/01/mod01/fmt/png",
        "createdAt": "2025-07-22T18:12:00.000Z"
      }
    ],
    "premium": true,
    "searchHistory": ["sportswear", "shoes"],
    "createdAt": "2025-07-10T11:30:00.000Z",
    "phone": "9123456789",
    "gender": "Male",
    "avatar": "https://i.pinimg.com/736x/14/95/4a/14954a35dcecd351b88a7e40bc21a3c7.jpg",
    "address": {
      "house": "123-A",
      "city": "Bengaluru",
      "state": "Karnataka",
      "country": "India",
      "pincode": "560001"
    }
  },
  {
    "userId": "z9Y8X7W6V5U4T3S2R1Q0",
    "name": "Isha Sharma",
    "email": "isha.sharma@example.com",
    "password": "isha@1234",
    "cart": [],
    "wishlist": ["631200"],
    "orders": [],
    "notifications": [
      {
        "tittle": "Item Saved to Wishlist",
        "message": "Women's Luxe Yoga Joggers",
        "id": "631200",
        "images": "https://images.puma.com/image/upload/f_auto/global/631200/01/mod01/fmt/png",
        "createdAt": "2025-07-21T10:45:00.000Z"
      }
    ],
    "premium": null,
    "searchHistory": ["leggings", "cotton tops"],
    "createdAt": "2025-06-30T09:15:00.000Z",
    "phone": "9876543210",
    "gender": "Female",
    "avatar": "https://i.pinimg.com/736x/67/92/ef/6792efee3c4b1d5f9d85ab9aa77d1237.jpg",
    "address": {
      "house": "Flat 202",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India",
      "pincode": "110001"
    }
  },
  {
    "userId": "p0O9I8U7Y6T5R4E3W2Q1",
    "name": "Rohan Kapoor",
    "email": "rohan.kapoor@example.com",
    "password": "rohanPass@89",
    "cart": ["621198"],
    "wishlist": [],
    "orders": [],
    "notifications": [
      {
        "tittle": "Cart Update",
        "message": "Running Shoes for Men",
        "id": "621198",
        "images": "https://images.puma.com/image/upload/f_auto/global/621198/01/mod01/fmt/png",
        "createdAt": "2025-07-20T16:20:00.000Z"
      }
    ],
    "premium": false,
    "searchHistory": ["running shoes", "jackets"],
    "createdAt": "2025-07-01T14:45:00.000Z",
    "phone": "9012345678",
    "gender": "Male",
    "avatar": "https://i.pinimg.com/736x/31/30/10/3130101e22c3aa84691e1fdb22f3d9b5.jpg",
    "address": {
      "house": "Villa 76",
      "city": "Pune",
      "state": "Maharashtra",
      "country": "India",
      "pincode": "411001"
    }
  }
];


export default fakeUsers;