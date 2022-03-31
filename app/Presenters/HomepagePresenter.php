<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;
use Nette\Application\UI\Form;


final class HomepagePresenter extends Nette\Application\UI\Presenter
{
    private Nette\Database\Explorer $database;

    private $slides;
    private $pages;

    public function __construct(Nette\Database\Explorer $database)
    {
        $this->database = $database;
    }

    public function actionDefault(): void 
    {
        $this->slides = $this->database->table('slides');
        $this->pages = $this->database->table('pages')->order('id DESC');
    }

    public function renderDefault(): void
    {
        $this->template->slides = $this->slides;
        $this->template->pages = $this->pages;
    }
}