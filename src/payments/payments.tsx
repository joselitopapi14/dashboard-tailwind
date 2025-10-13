type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  { id: "629f3k91", amount: 250, status: "success", email: "user@test.com" },
  { id: "839a2b12", amount: 50, status: "failed", email: "failed@example.com" },
  { id: "a1b2c3d4", amount: 300, status: "pending", email: "alice@domain.com" },
  { id: "b2c3d4e5", amount: 175, status: "processing", email: "bob@domain.com" },
  { id: "c3d4e5f6", amount: 400, status: "success", email: "carol@domain.com" },
  { id: "d4e5f6g7", amount: 90, status: "failed", email: "dan@domain.com" },
  { id: "e5f6g7h8", amount: 220, status: "pending", email: "eve@domain.com" },
  { id: "f6g7h8i9", amount: 310, status: "processing", email: "frank@domain.com" },
  { id: "g7h8i9j0", amount: 80, status: "success", email: "grace@domain.com" },
  { id: "h8i9j0k1", amount: 60, status: "failed", email: "hank@domain.com" },
  { id: "i9j0k1l2", amount: 500, status: "pending", email: "ivy@domain.com" },
  { id: "j0k1l2m3", amount: 200, status: "processing", email: "jack@domain.com" },
  { id: "k1l2m3n4", amount: 350, status: "success", email: "kate@domain.com" },
  { id: "l2m3n4o5", amount: 120, status: "failed", email: "leo@domain.com" },
  { id: "m3n4o5p6", amount: 275, status: "pending", email: "mia@domain.com" },
  { id: "n4o5p6q7", amount: 180, status: "processing", email: "nick@domain.com" },
  { id: "o5p6q7r8", amount: 420, status: "success", email: "olga@domain.com" },
  { id: "p6q7r8s9", amount: 95, status: "failed", email: "paul@domain.com" },
  { id: "q7r8s9t0", amount: 210, status: "pending", email: "quinn@domain.com" },
  { id: "r8s9t0u1", amount: 330, status: "processing", email: "rose@domain.com" },
  { id: "s9t0u1v2", amount: 140, status: "success", email: "sam@domain.com" },
  { id: "t0u1v2w3", amount: 70, status: "failed", email: "tom@domain.com" },
  { id: "u1v2w3x4", amount: 260, status: "pending", email: "uma@domain.com" },
  { id: "v2w3x4y5", amount: 320, status: "processing", email: "vic@domain.com" },
  { id: "w3x4y5z6", amount: 110, status: "success", email: "will@domain.com" },
  { id: "x4y5z6a7", amount: 55, status: "failed", email: "xena@domain.com" },
  { id: "y5z6a7b8", amount: 390, status: "pending", email: "yuri@domain.com" },
  { id: "z6a7b8c9", amount: 240, status: "processing", email: "zoe@domain.com" },
  { id: "a7b8c9d0", amount: 130, status: "success", email: "amy@domain.com" },
  { id: "b8c9d0e1", amount: 85, status: "failed", email: "ben@domain.com" },
  { id: "c9d0e1f2", amount: 370, status: "pending", email: "clara@domain.com" },
  { id: "d0e1f2g3", amount: 290, status: "processing", email: "dave@domain.com" },
  { id: "e1f2g3h4", amount: 160, status: "success", email: "ella@domain.com" },
  { id: "f2g3h4i5", amount: 105, status: "failed", email: "finn@domain.com" },
  { id: "g3h4i5j6", amount: 410, status: "pending", email: "gina@domain.com" },
  { id: "h4i5j6k7", amount: 230, status: "processing", email: "harry@domain.com" },
  { id: "i5j6k7l8", amount: 340, status: "success", email: "irene@domain.com" },
  { id: "j6k7l8m9", amount: 75, status: "failed", email: "josh@domain.com" },
]