import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

import { IPost } from "../../interfaces/posts/ipost";
import { PostService } from "../../services/posts/posts.service";

@Component({
    selector: "post-form",
    templateUrl: "./app/components/post-form/post-form.component.html"
})
export class PostFormComponent {
    @Input() post: IPost;
    @Input() title: string = "";
    @Input() body: string = "";

    onSubmit(form: any) {
    	console.log("form  " + JSON.stringify(form));

    	this.post = new Post(form.title, form.body, form.image, 3);
    	console.log("show  " + JSON.stringify(this.post));
        this.postService.createPost(this.post);
    }

    constructor(private postService: PostService,
        private route: ActivatedRoute,
        private router: Router) { 
    }

}

class Post implements IPost {  
    constructor(public title: string, public body: string, public image: string, public id: number) {

    } 
}
