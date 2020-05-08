import { Component, Input, ContentChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent {
  @ContentChild("contentParagraph") paragraph: ElementRef;
  @Input("srvElement") element: { name: string; type: string; content: string };
  constructor() {
    console.log("Consrtructor");
  }
}
