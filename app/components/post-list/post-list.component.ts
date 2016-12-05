import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OnInit } from "@angular/core";

import { IPost } from "../../interfaces/posts/ipost";
import { PostService } from "../../services/posts/posts.service";

@Component({
    selector: "post-list",
    templateUrl: "./app/components/post-list/post-list.component.html"
})
export class PostListComponent implements OnInit {

	page: number = 1;
    postList: IPost[];
    prevPage: number = parseInt(this.route.snapshot.params['page']) - 1; 
    nextPage: number = parseInt(this.route.snapshot.params['page']) + 1;

    async ngOnInit() {
        let id = parseInt(this.route.snapshot.params['page']);

        this.postList = await this.postService.getPostByPage(id);
    }

    constructor(private postService: PostService,
        private route: ActivatedRoute,
        private router: Router) { 
    }
}
