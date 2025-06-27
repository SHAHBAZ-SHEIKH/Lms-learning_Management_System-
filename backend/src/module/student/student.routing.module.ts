import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { UserModule } from "./user/user.module";

const routes: Routes = [
  {
    path: "student",
    children: [
        {
            path: "user",
            module: UserModule
        }
    //   {
    //     path: "log",
    //     module: LogModule
    //   },
    //   {
    //     path: "staff",
    //     module: StaffModule
    //   },
    //   {
    //     path: "customer",
    //     module: CustomerModule
    //   },
    //   {
    //     path: "subscription",
    //     module: SubscriptionModule
    //   },
    //   {
    //     path: "subscriptionpackages",
    //     module: SubscriptionPackagesModule
    //   },
    //   {
    //     path: "payment",
    //     module: PaymentModule
    //   },
    //   {
    //     path: "promotional",
    //     module: PromotionalModule
    //   },
    //   {
    //     path: "dashboard",
    //     module: DashboardModule
    //   }
    ]
  }
]

@Module({
  imports: [RouterModule.register(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule { }