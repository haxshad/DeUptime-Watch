"use client"

import { API_BACKEND_URL } from "@/config";
import { useAuth } from "@clerk/nextjs";
import axios from "axios"
import { useEffect, useState } from "react";

interface Website {
    id: string
    url: string
    ticks: {
        id: string
        createdAt: string
        status: string
        latency: number
    }[]
}

export function useWebsites() {
    const { getToken } = useAuth()
    const [websites, setWebsites] = useState<Website[]>([])

    async function refreshWebsites() {
        const token = await getToken()
        const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
            headers: {
                Authorization: token
            }
        })

        setWebsites(response.data.websites)
    }

    useEffect(() => {
        refreshWebsites()

        const interval = setInterval(() => {
            refreshWebsites()
        }, 1000 * 60 * 1)

        return () => clearInterval(interval)
    }, [])

    return { websites, refreshWebsites }
}

// "use client"

// import { API_BACKEND_URL } from "@/config";
// import { useAuth } from "@clerk/nextjs";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Website {
//     id: string;
//     url: string;
//     ticks: {
//         id: string;
//         createdAt: string;
//         status: string;
//         latency: number;
//     }[];
// }

// export function useWebsites() {
//     const { getToken } = useAuth();
//     const [websites, setWebsites] = useState<Website[]>([]);

//     async function refreshWebsites() {
//         const token = await getToken();
//         if (!token) {
//             console.error("No token found");
//             return;
//         }

//         const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
//             headers: {
//                 Authorization: `Bearer ${token}`, // <-- fixed here
//             },
//         });

//         setWebsites(response.data.websites);
//     }

//     useEffect(() => {
//         refreshWebsites();

//         const interval = setInterval(() => {
//             refreshWebsites();
//         }, 1000 * 60 * 1);

//         return () => clearInterval(interval);
//     }, []);

//     return { websites, refreshWebsites };
// }


// "use client"

// import { API_BACKEND_URL } from "@/config";
// import { useAuth } from "@clerk/nextjs";
// import axios from "axios"
// import { useEffect, useState } from "react";

// interface Website {
//     id: string
//     url: string
//     ticks: {
//         id: string
//         createdAt: string
//         status: string
//         latency: number
//     }[]
// }

// export function useWebsites() {
//     const { getToken } = useAuth()
//     const [websites, setWebsites] = useState<Website[]>([])
//     const [error, setError] = useState<string | null>(null)

//     async function refreshWebsites() {
//         const token = await getToken()

//         if (!token) {
//             setError("No token found, skipping fetch.");
//             return;
//         }

//         try {
//             const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             })
//             setWebsites(response.data.websites)
//             setError(null); // Reset error if request is successful
//         } catch (err) {
//             setError("Failed to fetch websites. Please try again.");
//             console.error(err);
//         }
//     }

//     useEffect(() => {
//         refreshWebsites()

//         const interval = setInterval(() => {
//             refreshWebsites()
//         }, 1000 * 60 * 1) // Refresh every minute

//         return () => clearInterval(interval)
//     }, [])

//     return { websites, refreshWebsites, error }
// }


// "use client"

// import { API_BACKEND_URL } from "@/config";
// import { useAuth } from "@clerk/nextjs";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Website {
//     id: string;
//     url: string;
//     ticks: {
//         id: string;
//         createdAt: string;
//         status: string;
//         latency: number;
//     }[];
// }

// export function useWebsites() {
//     const { getToken } = useAuth();
//     const [websites, setWebsites] = useState<Website[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);  // To track loading state
//     const [error, setError] = useState<string | null>(null);   // To track any errors

//     async function refreshWebsites() {
//         setLoading(true);
//         setError(null); // Reset the error before the request

//         try {
//             const token = await getToken();

//             // Check if token is available
//             if (!token) {
//                 setError('Unauthorized: Token is missing');
//                 return;
//             }

//             const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`  // Ensure Bearer token is sent correctly
//                 }
//             });

//             setWebsites(response.data.websites);  // Update the state with the fetched websites
//         } catch (err: any) {
//             // Handle any errors that occur during the API call
//             setError('Failed to fetch websites. Please try again.');
//             console.error('Error fetching websites:', err);  // Log the error for debugging
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         refreshWebsites();

//         const interval = setInterval(() => {
//             refreshWebsites();
//         }, 1000 * 60 * 1); // Refresh every minute

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, []);

//     return { websites, refreshWebsites, loading, error };
// }


// "use client";

// import { API_BACKEND_URL } from "@/config";
// import { useAuth } from "@clerk/nextjs";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Website {
//   id: string;
//   url: string;
//   ticks: {
//     id: string;
//     createdAt: string;
//     status: string;
//     latency: number;
//   }[];
// }

// export function useWebsites() {
//   const { getToken } = useAuth();
//   const [websites, setWebsites] = useState<Website[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   async function refreshWebsites() {
//     setLoading(true);
//     setError(null);
//     try {
//       const token = await getToken();
//       console.log("API_BACKEND_URL:", API_BACKEND_URL);
//       console.log("Token:", token);
//       if (!token) throw new Error("No token provided");
//       const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         timeout: 5000,
//       });
//       setWebsites(response.data.websites);
//     } catch (err) {
//       console.error("Axios Error:", err);
//       setError(axios.isAxiosError(err) ? err.message : "Unknown error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     refreshWebsites();
//     const interval = setInterval(() => {
//       refreshWebsites();
//     }, 1000 * 60 * 1);

//     return () => clearInterval(interval);
//   }, []);

//   return { websites, loading, error, refreshWebsites };
// }