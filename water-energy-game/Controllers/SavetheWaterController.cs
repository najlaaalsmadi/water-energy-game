using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using water_energy_game.Models;

namespace water_energy_game.Controllers
{

    public class SavetheWaterController : Controller
    {
        private readonly ILogger<SavetheWaterController> _logger;
        public SavetheWaterController(ILogger<SavetheWaterController> logger)
        {
            _logger = logger;
        }
        public IActionResult indexgame()
        {
            return View();
        }

        public IActionResult success() {
            return View();
        }
        public IActionResult game()
        {
            return View();
        }
        public IActionResult gameover()
        {
            return View();
        }
        public IActionResult instructions()
        {
            return View();
        }
        public IActionResult story()
        {
            return View();
        }

    }
}
