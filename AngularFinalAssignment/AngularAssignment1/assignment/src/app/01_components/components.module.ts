import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from "./components-demo/components-demo.component";
import { UserCardComponent } from './user-card/user-card.component';
import { TopicNgForComponent } from './topic-ng-for/topic-ng-for.component';


@NgModule({
    declarations:[
        ComponentsDemoComponent,
        UserCardComponent,
        TopicNgForComponent
    ],
    imports:[CommonModule],
    exports:[ComponentsDemoComponent],
})
export class ComponentsModule {}