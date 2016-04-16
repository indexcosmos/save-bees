/**
 * Box profile
 */
Player.profiles.bee = function()
{
    Game.config.player.jump = 1.0;

    Game.config.player.double_jump = 1.0;
};

/**
 * Square profile
 */
Player.profiles.comb = function()
{
    Game.config.player.jump = 1.0;

    Game.config.player.double_jump = 1.0;

    Game.config.player.build = true;
};

/**
 * Star profile
 */
Player.profiles.nectar = function()
{
    Game.config.player.jump = 1.3;

    Game.config.player.double_jump = 0.5;
};

/**
 * Circle profile
 */
Player.profiles.circle = function()
{
    Game.keys[38] = true;

    Game.config.player.jump = 1.5;

    Game.config.player.double_jump = 1.2;
};

/**
 * floor profile
 */
Player.profiles.floor = function()
{

  window.location = "?map="+(Game.config.next - 1);
  
};
