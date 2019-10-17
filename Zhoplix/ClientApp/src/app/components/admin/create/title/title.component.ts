import { AdminService } from './../../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MediaUploadService } from 'src/app/services/media/media-upload.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {

  type: string;
  form: any;
  progress: number;
  message: string;
  uploading: boolean;

  constructor(private readonly fb: FormBuilder,
              private readonly media: MediaUploadService,
              private readonly admin: AdminService,
              private readonly snack: MatSnackBar,
              private readonly router: Router) { }

  ngOnInit() {
    this.uploading = false;
    this.form = this.fb.group({
      name: '',
      description: '',
      ageRestriction: 0,
      imageId: ''
    })
    this.media.getProgress().subscribe(value => {
      this.progress = value;
    });
  }

  uploadPhoto(files) {
    this.uploading = true;
    this.media.uploadPhoto(files[0]);
    this.media.getMessage().subscribe(value => {
      if(value) {
        this.form.controls['imageId'].setValue(value);
        this.uploading = false;
      }
    })
  }

  onSubmit() {
    this.admin.createTitle(this.form.value).subscribe(() => {
      this.message = 'Created';
      this.snack.open(`Title "${this.form.controls['name'].value}" was successfully created`,
        'OK', {duration: 3000, panelClass: ['snack-success']});
      this.router.navigateByUrl('/admin/create');
    }, () => {
      this.message = 'Problems'
    });
  }
}
