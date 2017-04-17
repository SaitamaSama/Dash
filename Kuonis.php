<?php

(new \Aerys\Host())
    ->expose('*', 9000)
    ->use(\Aerys\root(__DIR__ . '/public'));
