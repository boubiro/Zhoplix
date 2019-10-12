﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Zhoplix.Models;
using Zhoplix.Models.Media;
using Zhoplix.Services;
using Zhoplix.ViewModels.Episode;
using Zhoplix.ViewModels.Season;
using Zhoplix.ViewModels.Title;

namespace Zhoplix.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IRepository<Title> _titleContext;
        private readonly IRepository<Season> _seasonContext;
        private readonly IRepository<Episode> _episodeContext;
        private readonly IMapper _mapper;
        private readonly ILogger<AdminController> _logger;
        private readonly IMediaService _mediaService;

        public AdminController(IRepository<Title> titleContext,
            IRepository<Season> seasonContext,
            IRepository<Episode> episodeContext,
            IMapper mapper,
            ILogger<AdminController> logger,
            IMediaService mediaService)
        {
            _titleContext = titleContext;
            _seasonContext = seasonContext;
            _episodeContext = episodeContext;
            _mapper = mapper;
            _logger = logger;
            _mediaService = mediaService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTitle(CreateTitleViewModel model)
        {
            var title = _mapper.Map<Title>(model);
            await _titleContext.AddObjectAsync(title);
            return Created($"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Title/{title.Id}", _mapper.Map<TitleViewModel>(title));
        }

        [HttpPost]
        public async Task<IActionResult> CreateSeason(CreateSeasonViewModel model)
        {
            var season = _mapper.Map<Season>(model);
            await _seasonContext.AddObjectAsync(season);
            return Created($"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Title/{season.Id}", _mapper.Map<SeasonViewModel>(season));
        }

        [HttpPost]
        public async Task<IActionResult> CreateEpisode(CreateEpisodeViewModel model)
        {
            var episode = _mapper.Map<Episode>(model);
            await _episodeContext.AddObjectAsync(episode);
            return Created($"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Title/{episode.Id}", _mapper.Map<SeasonViewModel>(episode));
        }

        [HttpPost]
        public async Task<IActionResult> UploadVideo(UploadVideo video)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult UploadPhoto(UploadPhoto photo)
        {
            _mediaService.CreatePhoto(photo);
            _mediaService.CreateResizedPhoto(photo, 0.1f, "small");
            _mediaService.CreateResizedPhoto(photo, 0.5f, "medium");
            return Ok();
        }

        [HttpPost]
        public IActionResult DeletePhoto(DeletePhoto photo)
        {
            _mediaService.DeletePhoto(photo.Name);
            return Ok();
        }

        [HttpPost]
        public IActionResult DeleteAllPhotos(DeleteAllPhotos id)
        {
            _mediaService.DeleteAllPhotosWithId(id.Id);
            return Ok();
        }
    }
}
