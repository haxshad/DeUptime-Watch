// import { prismaClient } from "../src"

// async function seed() {
//     await prismaClient.user.create({
//         data: {
//             id: "2",
//             email: "test@test.com",
//         }
//     })

//     await prismaClient.website.create({
//         data: {
//             id: "2",
//             url: "https://test.com",
//             userId: "1"
//         }
//     })

//     const validator = await prismaClient.validator.create({
//         data: {
//             publicKey: "0x24234r23",
//             location: "Delhi",
//             ip: "127.0.0.1"
//         }
//     })

//     await prismaClient.websiteTick.create({
//         data: {
//             websiteId: "1",
//             status: "Good",
//             createdAt: new Date(),
//             latency: 100,
//             validatorId: validator.id
//         }
//     })

//     await prismaClient.websiteTick.create({
//         data: {
//             websiteId: "1",
//             status: "Good",
//             createdAt: new Date(Date.now() - 1000 * 60 * 10),
//             latency: 100,
//             validatorId: validator.id
//         }
//     })

//     await prismaClient.websiteTick.create({
//         data: {
//             websiteId: "1",
//             status: "Bad",
//             createdAt: new Date(Date.now() - 1000 * 60 * 20),
//             latency: 100,
//             validatorId: validator.id
//         }
//     })
// }

// seed()


// import { prismaClient } from "../src";

// const USER_ID = "4";

// async function seed() {
//     await prismaClient.user.create({
//         data: {
//             id: USER_ID,
//             email: "test@test.com",
//         }
//     })

//     const website = await prismaClient.website.create({
//         data: {
//             url: "https://test.com",
//             userId: USER_ID
//         }
//     })

//     const validator = await prismaClient.validator.create({
//         data: {
//             publicKey: "0x12341223123",
//             location: "Delhi",
//             ip: "127.0.0.1",
//         }
//     })

//     await prismaClient.websiteTick.create({
//         data: {
//             websiteId: website.id,
//             status: "Good",
//             createdAt: new Date(),
//             latency: 100,
//             validatorId: validator.id
//         }
//     })

//     await prismaClient.websiteTick.create({
//         data: {
//             websiteId: website.id,
//             status: "Good",
//             createdAt: new Date(Date.now() - 1000 * 60 *10),
//             latency: 100,
//             validatorId: validator.id
//         }
//     })

//     await prismaClient.websiteTick.create({
//         data: {
//             websiteId: website.id,
//             status: "Bad",
//             createdAt: new Date(Date.now() - 1000 * 60 * 20),
//             latency: 100,
//             validatorId: validator.id
//         }
//     })
// }

// seed();

import { prismaClient } from "../src";

const USER_ID = "4";

async function seed() {
    try {
        await prismaClient.user.upsert({
            where: { id: USER_ID },
            update: {}, // do nothing if user already exists
            create: {
                id: USER_ID,
                email: "test@test.com",
            }
        });

        const website = await prismaClient.website.create({
            data: {
                url: "https://test.com",
                userId: USER_ID
            }
        });

        const validator = await prismaClient.validator.create({
            data: {
                publicKey: "0x12341223123",
                location: "Delhi",
                ip: "127.0.0.1",
            }
        });

        await prismaClient.websiteTick.create({
            data: {
                websiteId: website.id,
                status: "Good",
                createdAt: new Date(),
                latency: 100,
                validatorId: validator.id
            }
        });

        await prismaClient.websiteTick.create({
            data: {
                websiteId: website.id,
                status: "Good",
                createdAt: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
                latency: 100,
                validatorId: validator.id
            }
        });

        await prismaClient.websiteTick.create({
            data: {
                websiteId: website.id,
                status: "Bad",
                createdAt: new Date(Date.now() - 1000 * 60 * 20), // 20 minutes ago
                latency: 100,
                validatorId: validator.id
            }
        });

        console.log("✅ Seeding completed successfully!");
    } catch (error) {
        console.error("❌ Seeding failed:", error);
    } finally {
        await prismaClient.$disconnect();
    }
}

seed();
