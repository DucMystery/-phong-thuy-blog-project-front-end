import { Injectable } from '@angular/core';
import {Iblog} from '../interface/iblog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs:Iblog[]=[
    {id:1,
      title:'this is title 1',
      content:'this is content 1'
    },
    {id:2,
      title:'this is title 2',
      content:'this is content 2'
    },
    {id:3,
      title:'this is title 3',
      content:'this is content 3'
    },
    {id:1,
      title:'this is title 4',
      content:'this is content 4'
    },
    {id:5,
      title:'this is title 5',
      content:'this is content 5'
    }
  ]


  constructor() {

  }
  getAllBlogByTime(){
    return this.blogs;
  }
}
