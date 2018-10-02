import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { noAccessComponent } from "./general/no_access/noAccess.component";
import { notFoundPageComponent } from "./general/notFoundPage/notFoundPage.component";
import { loginComponent } from "./general/login/login.component";

import { AuthguardGuard } from "./common/auth/authguard.guard";

const applicationRout : Routes =[
    {
        path: '',
        component: loginComponent
    },
    {
        path: 'welcome',
        canActivate: [AuthguardGuard],
        loadChildren: './welcome/welcome.module#CisWelcomeModule'
    },
    {
        path: 'inspection',
        loadChildren: './modules/inspection-module/inspection.module#inspectionModule'
    },
    {
        path: 'test',
        loadChildren: './modules/test-module/test.module#testModule'
    },
    {
        path: 'no-access',
        component: noAccessComponent
    },
    {
        path: '**',
        component: notFoundPageComponent
    }

]


@NgModule({
    imports:[
        RouterModule.forRoot(
            applicationRout, { useHash: true, preloadingStrategy: PreloadAllModules}
        )
    ],
    exports: [RouterModule]
})

export class CISAppRoutingModule {}