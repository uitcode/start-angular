import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  navigations = [
    {
      title: 'tổng quan',
      child: [
        {
          title: 'hệ thống',
          url: '/system-overview',
          icon: 'dashboard',
          active: true
        }
      ]
    },
    {
      title: 'tài khoản',
      child: [
        {
          title: 'quản trị viên',
          url: '/admin',
          icon: 'crown',
          active: false
        },
        {
          title: 'người dùng',
          url: '/user',
          icon: 'idcard',
          active: false
        }
      ]
    },
    {
      title: 'phim',
      child: [
        {
          title: 'bộ phim',
          url: '/film',
          icon: 'video-camera',
          active: false
        },
        {
          title: 'tập phim',
          url: '/episode',
          icon: 'play-circle',
          active: false
        },
        {
          title: 'diễn viên',
          url: '/actor',
          icon: 'user',
          active: false
        }
      ]
    },
    {
      title: 'công cụ',
      child: [
        {
          title: 'chỉnh sửa phim',
          url: '/edit-film',
          icon: 'control',
          active: false
        }
      ]
    }
  ];

  loadAnimation = true;

  constructor(private cdRef: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.changeRoute('/' + this.router.url.split('/')[1]);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const path = e.url.split('/');
        this.changeRoute('/' + path[1]);
      });

    setTimeout(() => {
      this.loadAnimation = false;
    }, 1000);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  changeRoute(path): void {
    console.log(path);
    for (const navigation of this.navigations) {
      navigation.child.map(item => {
        item.active = item.url === path;
      });
    }
  }
}
