<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;
use Nette\Application\UI\Form;


final class HomepagePresenter extends Nette\Application\UI\Presenter
{
    private Nette\Database\Explorer $database;

    private $slides;

    public function __construct(Nette\Database\Explorer $database)
    {
        $this->database = $database;
    }

    public function actionDefault(): void 
    {
        $this->slides = $this->database->table('slides');
       
    }

    public function renderDefault(): void
    {
        $this->template->slides = $this->slides;
    }
}