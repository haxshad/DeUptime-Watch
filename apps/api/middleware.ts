import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "./config";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
        res.status(401).json({ error: 'Unauthorized' });
        return
    }

    const decoded = jwt.verify(token, JWT_PUBLIC_KEY);
    console.log(decoded);
    if (!decoded || !decoded.sub) {
        res.status(401).json({ error: 'Unauthorized' });
        return
    }

    req.userId = decoded.sub as string;
    
    next()
}

// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as { sub: string };

//         if (!decoded || !decoded.sub) {
//             return res.status(401).json({ error: 'Unauthorized' });
//         }

//         req.userId = decoded.sub;
//         next();
//     } catch (error) {
//         console.error('JWT verification failed:', error);
//         return res.status(401).json({ error: 'Invalid token' });
//     }
// }


// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const token = authHeader.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as { sub: string };

//         if (!decoded || !decoded.sub) {
//             return res.status(401).json({ error: 'Unauthorized' });
//         }

//         req.userId = decoded.sub;
//         next();
//     } catch (error) {
//         console.error('JWT verification failed:', error);
//         return res.status(401).json({ error: 'Invalid token' });
//     }
// }

// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     const token = authHeader.split(' ')[1]; // this will be a string | undefined

//     if (!token) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as { sub: string };

//         if (!decoded || !decoded.sub) {
//             res.status(401).json({ error: 'Unauthorized' });
//             return;
//         }

//         req.userId = decoded.sub;
//         next();
//     } catch (error) {
//         console.error('JWT verification failed:', error);
//         res.status(401).json({ error: 'Invalid token' });
//         return;
//     }
// }

// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const token = req.headers['authorization'];
    
//     if (!token) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY);
//         console.log(decoded);
        
//         if (typeof decoded === 'string' || !decoded.sub) {
//             res.status(401).json({ error: 'Unauthorized' });
//             return;
//         }

//         req.userId = decoded.sub as string;
//         next();
//     } catch (error) {
//         res.status(401).json({ error: 'Unauthorized' });
//     }
// }

// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(401).json({ error: 'Unauthorized - Missing token' });
//   }

//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized - Token missing after Bearer' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_PUBLIC_KEY);

//     if (!decoded || typeof decoded !== "object" || !decoded.sub) {
//       return res.status(401).json({ error: 'Unauthorized - Invalid token' });
//     }

//     req.userId = decoded.sub as string;

//     next();
//   } catch (err) {
//     console.error('JWT Verification Failed:', err);
//     return res.status(401).json({ error: 'Unauthorized - JWT verification failed' });
//   }
// }


// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     const token = authHeader.split(' ')[1]; // 🚀 Get only the token part
//     if (!token) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as { sub: string };
//         console.log(decoded);
//         if (!decoded || !decoded.sub) {
//             res.status(401).json({ error: 'Unauthorized' });
//             return;
//         }

//         req.userId = decoded.sub;
//         next();
//     } catch (err) {
//         console.error(err);
//         res.status(401).json({ error: 'Invalid token' });
//     }
// }


// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     const token = authHeader.split(' ')[1]; // 🛠️ Extract the actual token
//     if (!token) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as { sub: string };
//         console.log(decoded);

//         if (!decoded || !decoded.sub) {
//             res.status(401).json({ error: 'Unauthorized' });
//             return;
//         }

//         req.userId = decoded.sub;

//         next();
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ error: 'Invalid token' });
//     }
// }


// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) {
//         return res.status(401).json({ error: 'Authorization header missing' });
//     }

//     let token: string;

//     if (authHeader.startsWith('Bearer ')) {
//         token = authHeader.substring(7); // Remove "Bearer "
//     } else {
//         token = authHeader; // Maybe raw token
//     }

//     if (!token) {
//         return res.status(401).json({ error: 'Token missing' });
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY, { algorithms: ['RS256'] }) as { sub: string }; // Add algorithm option
//         console.log(decoded);

//         if (!decoded?.sub) {
//             return res.status(401).json({ error: 'Invalid token payload' });
//         }

//         req.userId = decoded.sub;
//         next();
//     } catch (error) {
//         console.error(error);
//         return res.status(401).json({ error: 'Invalid or malformed token' });
//     }
// }


// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     try {
//         const authHeader = req.headers['authorization'];
//         if (!authHeader) {
//             res.status(401).json({ error: 'Authorization header missing' });
//             return;
//         }

//         let token: string;

//         if (authHeader.startsWith('Bearer ')) {
//             token = authHeader.substring(7);
//         } else {
//             token = authHeader;
//         }

//         if (!token) {
//             res.status(401).json({ error: 'Token missing' });
//             return;
//         }

//         // const decoded = jwt.verify(token, JWT_PUBLIC_KEY, { algorithms: ['RS256'] }) as { sub: string };
//         const decoded = jwt.decode(token) as { sub: string };

        
//         if (!decoded?.sub) {
//             res.status(401).json({ error: 'Invalid token payload' });
//             return;
//         }

//         // Extend req type here!
//         (req as any).userId = decoded.sub; // because req.userId is custom
//         next();
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ error: 'Invalid or malformed token' });
//     }
// }


// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     try {
//         const authHeader = req.headers['authorization'];
//         if (!authHeader) {
//             res.status(401).json({ error: 'Authorization header missing' });
//             return;
//         }

//         let token: string;

//         if (authHeader.startsWith('Bearer ')) {
//             token = authHeader.substring(7); // Extract token after "Bearer "
//         } else {
//             token = authHeader; // If not prefixed with "Bearer", assume it's the token itself
//         }

//         if (!token) {
//             res.status(401).json({ error: 'Token missing' });
//             return;
//         }

//         // Use JWT_PUBLIC_KEY to verify the JWT token with the RS256 algorithm
//         const decoded = jwt.verify(token, JWT_PUBLIC_KEY, { algorithms: ['RS256'] }) as { sub: string };

//         if (!decoded?.sub) {
//             res.status(401).json({ error: 'Invalid token payload' });
//             return;
//         }

//         // Extend req type here with the userId from the decoded payload
//         (req as any).userId = decoded.sub;
//         next();
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ error: 'Invalid or malformed token' });
//     }
// }

// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
//   const token = req.headers['authorization'];
//   if (!token) {
//     res.status(401).json({ error: 'Unauthorized' });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as { sub?: string };
//     if (!decoded || !decoded.sub) {
//       res.status(401).json({ error: 'Unauthorized' });
//       return;
//     }

//     req.userId = decoded.sub;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// }