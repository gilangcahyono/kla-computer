import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   message: Data[]
// }

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  //   res: NextApiResponse<ResponseData>
  res: NextApiResponse<any>,
) {
  res.status(200).json([
    { id: 1, name: "Google Chrome", link: "#", icon: "#" },
    { id: 2, name: "Mozila Firefox", link: "#", icon: "#" },
    { id: 3, name: "Microsoft Edge", link: "#", icon: "#" },
    { id: 4, name: "Opera", link: "#", icon: "#" },
    { id: 5, name: "Vivaldi", link: "#", icon: "#" },
    { id: 6, name: "Safari", link: "#", icon: "#" },
    { id: 7, name: "Brave Browser", link: "#", icon: "#" },
  ]);
}
