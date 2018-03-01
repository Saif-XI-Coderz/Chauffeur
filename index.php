<?php
// define model
class Ride {
  public $a;
  public $b;
  public $x;
  public $y;
  public $earliest;
  public $latest;
  public $done = false;

  public function __construct($a, $b, $x, $y, $earliest, $latest) {
    $this->a = $a;
    $this->b = $b;
    $this->x = $x;
    $this->y = $y;
    $this->earliest = $earliest;
    $this->latest = $latest;
  }

  public function calculateDistance() {
    return abs($this->b - $this->a) + abs($this->y - $this->x);
  }

}

class Vehicle {
  public $sx = 0;
  public $sy = 0;
  public $fx = 0;
  public $fy = 0;
}

// Load data
$dataset = file('b_should_be_easy.in');

$count = 0;
$rides = [];
foreach ($dataset as $line) {
  if ($count > 0) {
    $values = explode(' ', trim($line));
    $rides[] = new Ride($values[0], $values[1], $values[2], $values[3], $values[4], $values[5]);
  } else {
    $values = explode(' ', trim($line));
    define('ROWS_IN_GRID', $values[0]);
    define('COLUMNS_IN_GRID', $values[1]);
    define('VEHICLES_IN_FLEET', $values[2]);
    define('NUMBER_OF_RIDES', $values[3]);
    define('PER_RIDE_BONUS', $values[4]);
    define('NUMBER_OF_STEPS', $values[5]);
  }

  $count++;
}

// usort($rides, function($a, $b) {
//   return $a->earliest - $b->earliest;
// });

// Begin simulation, vehicle starts at [0,0]
$points = 0;
$v = new Vehicle();
$bcount = 0;
foreach ($rides as $ride) {
  // set ending position of vehicle;
  $v->fx = $ride->x;
  $v->fy = $ride->y;

  // goes to start intersection to start ride
  $startStep = abs($ride->a - $v->sx) + abs($ride->b - $v->sy);

  // rides to finish intersection
  $stepsInRide = $ride->calculateDistance();

  // ride finishes
  $points += $stepsInRide;

  if ($startStep < $ride->earliest) {
    $bcount++;
    $points += PER_RIDE_BONUS;
  }

  // set start position of vehicle
  $v->sx = $ride->x;
  $v->sy = $ride->y;
}

echo $points;


