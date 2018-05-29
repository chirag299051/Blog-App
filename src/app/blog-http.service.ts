import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'OWMyNDIwODhjMTUyNDJjZmVmNTFjNDljZjdjZTUwZmM3OGJhOTU5YTk1YjdiN2Y3YjU1NDg1NWY1MGU2MjlmNjU4YWZjYTRiZTM1ZmUyYWFlNDQwNzcwODFjZmY3MzA4NGM5Y2JiMzFlNmViYTkwOThhOWRjZTI3MDFmMTk3MGY0Yw=='

  constructor(private _http:HttpClient) { 
    console.log('blog-http service was called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }


  public getAllBlogs():any{
    
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=OWMyNDIwODhjMTUyNDJjZmVmNTFjNDljZjdjZTUwZmM3OGJhOTU5YTk1YjdiN2Y3YjU1NDg1NWY1MGU2MjlmNjU4YWZjYTRiZTM1ZmUyYWFlNDQwNzcwODFjZmY3MzA4NGM5Y2JiMzFlNmViYTkwOThhOWRjZTI3MDFmMTk3MGY0Yw==');
    console.log(myResponse);
    return myResponse;

  }

  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken )
    return myResponse
  }

  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } // end create blog

  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }// end delete blog

  editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }// end delete blog


}
