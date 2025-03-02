using Microsoft.AspNetCore.Mvc;

namespace water_energy_game.Controllers
{
    public class GodotGameController : Controller
    {
        public IActionResult GodotIndex()
        {
            return View();
        }
    }
}
