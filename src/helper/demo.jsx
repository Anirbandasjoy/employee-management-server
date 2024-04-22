// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Link } from "react-router-dom";
// import { ChangeEvent, useState } from "react";
// import { EmployeeAddInputType } from "@/helper/type";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { EmployeeSchema } from "@/helper/schema";

// const AddEmployee = () => {
//   const [role, setRole] = useState("");
//   const [designation, setDesignation] = useState("");
//   console.log({ role, designation });
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm <
//   EmployeeAddInputType >
//   {
//     mode: "onChange",
//     resolver: yupResolver(EmployeeSchema),
//   };

//   const onSubmit = (data: EmployeeAddInputType) => {
//     console.log(data);
//   };
//   return (
//     <div className="">
//       <Card className="w-[550px] bg-gray-100">
//         <CardHeader>
//           <CardTitle>Added New Employee</CardTitle>
//           <CardDescription>
//             Added a new employed fill up the form
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter emplyee name"
//                   {...register("name")}
//                 />
//                 <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
//                   {errors?.name?.message}
//                 </p>
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter emplyee email"
//                   {...register("email")}
//                 />
//                 <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
//                   {errors?.email?.message}
//                 </p>
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter emplyee phone number"
//                   {...register("phone")}
//                 />
//                 <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
//                   {errors?.phone?.message}
//                 </p>
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   {...register("password")}
//                   id="password"
//                   placeholder="Enter emplyee password"
//                 />
//                 <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
//                   {errors?.password?.message}
//                 </p>
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="address">Address</Label>
//                 <Input
//                   id="address"
//                   placeholder="Enter emplyee address"
//                   {...register("address")}
//                 />
//                 <p className="text-red-500 text-xs dark:text-red-400 font-semibold">
//                   {errors?.address?.message}
//                 </p>
//               </div>
//               <div
//                 className="flex flex-col space-y-1.5"
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setDesignation(e.target.value)
//                 }
//               >
//                 <Label htmlFor="role">Designation</Label>
//                 <Select>
//                   <SelectTrigger id="designation">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper">
//                     <SelectItem value="frontendDeveloper">
//                       Forntend Developer
//                     </SelectItem>
//                     <SelectItem value="backendDeveloper">
//                       Backend Developer
//                     </SelectItem>
//                     <SelectItem value="fullstackDeveloper">
//                       FullStack Developer
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div
//                 className="flex flex-col space-y-1.5"
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setRole(e.target.value)
//                 }
//               >
//                 <Label htmlFor="role">Role</Label>
//                 <Select>
//                   <SelectTrigger id="role">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper">
//                     <SelectItem value="admin">Admin</SelectItem>
//                     <SelectItem value="employee">Employee</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <CardFooter className="flex justify-between mt-8  py-0 px-0">
//               <Link to="/dashboard">
//                 <Button variant="outline" className="text-xs">
//                   Back to Dasboard
//                 </Button>
//               </Link>
//               <button
//                 type="submit"
//                 className="bg-emerald-300 py-2 px-4 text-[13px] text-gray-600 hover:bg-emerald-300"
//               >
//                 Save
//               </button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddEmployee;
